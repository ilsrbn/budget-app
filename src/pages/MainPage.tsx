import styled from "styled-components";
import Table from "../components/Table/Table";
import {ICategory, ITransaction, TransactionTypes} from "../types";

const Grid = styled.div`
  padding: 0 36px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`
const GridRow = styled.div`
  min-height: var(--grid-size);
`

const SuperTitle = styled.div`
  width: calc(var(--grid-size) * 3);
  font-size: 162px;
  line-height: 1;
  h1 {
    margin: 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
export default function MainPage() {
  const products: ICategory = {
    id: 0,
    name: 'Products'
  }
  const transactions: Array<ITransaction> = [
    {
      id: 0,
      name: 'Salary',
      amount: 50000,
      type: TransactionTypes.income,
      category: null
    },
    {
      id: 1,
      name: 'Chocolate',
      amount: 48,
      type: TransactionTypes.outcome,
      category: products
    }
  ]
  return (
    <Grid>
      <GridRow>
        <SuperTitle>
          <h1>MY FINANCE</h1>
        </SuperTitle>
      </GridRow>
      <GridRow>
        <Wrapper>
          <Table transactions={transactions} />
        </Wrapper>
      </GridRow>
      <GridRow></GridRow>
      <GridRow></GridRow>
      <GridRow></GridRow>
      <GridRow></GridRow>
      <GridRow></GridRow>
      <GridRow></GridRow>
    </Grid>
  )
}
