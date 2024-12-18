import { useContextSelector } from "use-context-selector"

import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"

import { TransactionsContext } from "../../contexts/TransactionsContext"

import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles"
import { dateFormatter, priceFormatter } from "../../utils/formatter"

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    });

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    {
                        transactions && transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td width="0%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.type === "outcome" && "- " }
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))
                    }
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}