import React, { FC } from "react";
import { RequestState } from "store";

import { Button } from "components/UI";
import * as S from "./styled";

const Requests: FC<{ requests: RequestState[] }> = ({ requests }) => {
  const createCommaHandler = (arr: string[]) => {
    const fixedArr: string[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && i < arr.length - 1) {
        const returnValue = arr[i].replace(arr[i], arr[i] + ",");
        fixedArr.push(returnValue);
      } else {
        const returnValue = arr[i].replace(arr[i], " " + arr[i]);
        fixedArr.push(returnValue);
      }
    }
    return fixedArr;
  };

  if (requests.length === 0) {
    return <S.NoRequestBox>조건에 맞는 요청이 없습니다.</S.NoRequestBox>;
  }

  return (
    <S.RequestForms>
      {requests.map((request, i) => {
        const status = request.status;

        return (
          <S.RequestForm key={request.id}>
            <S.RequestCard>
              <S.RequetInnerTop>
                <div>
                  <h3>{request.title}</h3>
                  {status === "상담중" && <S.OnCounsle>상담중</S.OnCounsle>}
                </div>

                <p>{request.client}</p>
                <p>{request.due}까지 납기</p>
                <hr />
              </S.RequetInnerTop>
              <S.RequetInnerBottom>
                <tbody>
                  <S.RequestInfo>
                    <td>도면개수</td>
                    <td>{request.count}</td>
                  </S.RequestInfo>
                  <S.RequestInfo>
                    <td>총 수량</td>
                    <td>{request.amount}</td>
                  </S.RequestInfo>
                  <S.RequestInfo>
                    <td>가공방식</td>
                    <td>{createCommaHandler(request.method)}</td>
                  </S.RequestInfo>
                  <S.RequestInfo>
                    <td>재료</td>
                    <td>{createCommaHandler(request.material)}</td>
                  </S.RequestInfo>
                </tbody>
              </S.RequetInnerBottom>
              <S.ButtonActions>
                <Button theme="blue">요청 내역 보기</Button>
                <Button theme="white">채팅하기</Button>
              </S.ButtonActions>
            </S.RequestCard>
          </S.RequestForm>
        );
      })}
    </S.RequestForms>
  );
};

export default Requests;
