import {ICategory, ITransaction} from "../../types";
import styled from "styled-components";


interface Prop {
  transactions: ITransaction[]
}

const THead = styled.tr`
  text-transform: uppercase;
  text-align: left;
`

const TRow = styled.tr`
  padding: 4px 0 12px;
`

const TSpan = styled.span`
  //margin-top: 12px;
`
const TCell = styled.td`
  //margin-top: 12px;
  padding: 12px 0 0;
`

const TableStyle = styled.table`
  margin-left: calc(var(--grid-size) + 12px);
  width: calc(var(--grid-size) * 2);
  border-right: 1px solid var(--black);
`

const Table = ({transactions} : Prop) => {
  const headers = <THead>{Object.keys(transactions[0]).map(el => <th key={el}>{el}</th>)}</THead>
  function defineCell (cell: ICategory) {
    if (cell === null) {
      return <TSpan><i className="ri-subtract-line"></i></TSpan>
    } else if (typeof cell === 'object') {
      return <TSpan>{cell.name}</TSpan>
    } else {
      return <TSpan>{cell}</TSpan>
    }
  }
  function cells (row: ITransaction) {
    return Object.values(row).map((cell, i) => <TCell key={`td_${i}`}>{defineCell(cell)}</TCell>)
  }
  const rows = transactions.map(row => <TRow key={`tr_${row.id}`}>{ cells(row) }</TRow>)
  return (
    <TableStyle>
      <thead>
        {headers}
      </thead>
      <tbody>
        {rows}
      </tbody>
    </TableStyle>
  )

}

export default Table
