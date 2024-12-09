import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;

    width: 100vw;
    height: 100vh;

    background: var(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;

    min-width: 32rem;
    padding: 2.5rem 3rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: ${props => props.theme["gray-800"]};
    border-radius: 6px;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        margin-top: 2rem;
       
        input {
            padding: 1rem;

            border: 0;
            border-radius: 6px;

            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            height: 58px;

            margin-top: 1.5rem;
            padding: 1rem 2rem;

            border: 0;
            border-radius: 6px;

            font-weight: bold;
            color: ${props => props.theme.white};
            background: ${props => props.theme["green-500"]};

            cursor: pointer;

            &:hover {
                background: ${props => props.theme["green-700"]};
                transition: background-color 0.2s;
            }
        }
    }
`;

export const TransactionType = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
    variant: "income" | "outcome";
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem 1.5rem;

    border-radius: 6px;

    border: 0;
    background-color: ${props => props.theme["gray-700"]};
    color: ${props => props.theme["gray-300"]};

    cursor: pointer;

    svg {
        color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
    }
`;


export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;
    background: transparent;

    line-height: 0;
    color: ${props => props.theme["gray-500"]};

    cursor: pointer;
`;