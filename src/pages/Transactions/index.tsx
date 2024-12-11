import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles"

interface TransactionProps {
    id: number;
    description: string;
    type: "income" | "outcome";
    category: string;
    price: number;
    createdAt: string;
}

export function Transactions() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    async function loadTransactions() {
        const response = await fetch("http://localhost:3000/transactions")
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, []);

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
                                       {transaction.price}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))
                    }
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}