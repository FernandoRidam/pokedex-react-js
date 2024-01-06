import styled from "styled-components";

export const InputView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > input {
    width: 100%;
    height: 52px;
    border: solid 1px ${({ theme, error }) => error
      ? theme.colors.danger
      : theme.colors.secondary
    };
    border-radius: 8px;
    background-color: transparent;

    // vertical - horizontal
    margin: 4px 0px;
    // vertical - horizontal
    padding: 0px 8px;

    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > input::placeholder {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.placeholder};
    opacity: .5;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger};
`;
