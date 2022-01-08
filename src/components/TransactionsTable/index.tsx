import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            Desenvolvimento de WebSite
                        </td>
                        <td>$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>

                    <tr>
                        <td>
                            Desenvolvimento de WebSite
                        </td>
                        <td className="deposit">$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>

                    <tr>
                        <td>
                            Aluguel
                        </td>
                        <td className="withdraw">$1.100</td>
                        <td>Casa</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}