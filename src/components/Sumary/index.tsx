import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";
import totalImg from "./../../assets/total.svg";
import { Container } from "./style";
export function Sumary() {
  
  const transactions = useContext(TransactionContext);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1.000</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>- R$500</strong>
      </div>
      <div className="highlight-container">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
