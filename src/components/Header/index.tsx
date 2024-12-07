import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles.ts";

import "./styles.ts";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    <Dialog.DialogTrigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.DialogTrigger>

                    <Dialog.Portal>
                        <Dialog.Overlay />
                        
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>
                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer >

    )
}