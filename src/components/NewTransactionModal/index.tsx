import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { FormEvent, useState, useContext } from "react";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose,}: NewTransactionModalProps)
{
  
  const {createTransactions} = useContext(TransactionContext)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent){

    event.preventDefault();

    await createTransactions({
      title: title,
      amount: amount,
      type: type,
      category: category
    })

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>cadastrar transação</h2>

        <input type="text" placeholder="Titulo" onChange={(event) => setTitle(event.target.value)}/>

        <input type="text" placeholder="Valor"  onChange={(event) => setAmount(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType("deposit")} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} />
            <span>
              Entrada
            </span>
          </RadioBox>

          <RadioBox type="button" onClick={() => setType("withdraw")} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} />
            <span>
              Saída
            </span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria"  onChange={(event) => setCategory(event.target.value)}/>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
