import { useLocation } from "react-router-dom";
import PageTemplate from "../../components/pagetemplate/PageTemplate";
import { navItems } from '../../config/config'
import Editor from "../../components/editor/Editor";
import { useState } from "react";
import FluidContainer from "../../components/fluidcontainer/FluidContainer";
import { Button } from "reactstrap";
import { sqlService } from "../../services/sql/SqlService";
import ResultTable from "../../components/resulttable/ResultTable";

const Home = () => {
    const loc = useLocation()
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [result, setResult] = useState(null);
    const [rowCount, setRowCount] = useState(-1);
    const [exectued, setExecuted] = useState(false);

    const onSubmit = async () => {
        console.log(value);
        setError('');
        setResult(null);
        setRowCount(-1);
        setExecuted(false);
        if (value) {
            setIsLoading(true)
            try {
                const response = await sqlService.execute({ query: value });
                console.log(response);
                
                if (response.data.result) {
                    setResult(response.data.result);
                }
                if (response.data.rowcount) {
                    setRowCount(response.data.rowcount);
                }
                setExecuted(true);

            }
            catch (e) {
                console.log(e);
                setError(e?.response?.data?.error[1]);
            }
            setIsLoading(false);
        }

    }
    return (
        <PageTemplate currentPath={loc.pathname} navItems={navItems}>
            <FluidContainer>
                <Editor value={value} setValue={setValue} />
                <div className="text-center" style={{ color: 'red' }}>{(error) ? (error) : ('')}</div>
                <div className="text-center" style={{ color: 'green' }}>{(exectued && ( !result || result.length === 0 ) && !error) ? (rowCount>0 ? `${rowCount} rows affected successfully` : ' Query executed sucessfully')  : ('')}</div>
                <div className="mb-5">
                    <Button
                        color="success"
                        size="lg"
                        onClick={onSubmit}

                    >
                        {
                            isLoading ? <div className={"spinner-border text-white mx-3 align-self-center"} role="status">
                                <span className="sr-only">Loading...</span>
                            </div> : 'Execute'
                        }
                    </Button>
                </div>
                {
                    result && result.length >0 ?
                        <FluidContainer title="Results">
                            <ResultTable rows={result} />
                        </FluidContainer> : null
                }


            </FluidContainer>
        </PageTemplate>
    )
};

export default Home;