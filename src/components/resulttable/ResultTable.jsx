import { Table } from "reactstrap";

const ResultTable = (props) => {
    return (
        props.rows && props.rows.length > 0 ?
            <Table striped dark>
                <thead>
                    <tr>
                        {
                            props.rows[0].map(
                                (h,i) => (
                                    <th key={`header${i}`}>
                                        {h}
                                    </th>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rows.length > 1 ? props.rows.slice(1).map((r,i) => (
                            <tr key={`row${i}`}>
                                {r.map((d,j) => (
                                    <td key={`rowData${i}_${j}`}>
                                        {d}
                                    </td>
                                ))
                                }
                            </tr>
                        )) : null
                    }
                </tbody>
            </Table> : null
    );
}

export default ResultTable;