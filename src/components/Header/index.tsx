import logoImg from "../../assets/logo.svg"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.ts";

import "./styles.ts";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}