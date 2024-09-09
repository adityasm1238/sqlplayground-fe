import { useLocation } from "react-router-dom";
import PageTemplate from "../../components/pagetemplate/PageTemplate";
import { navItems } from "../../config/config";
import { useEffect, useState } from "react";
import PageLoading from "../../components/pageloading/PageLoading";
import { sqlService } from "../../services/sql/SqlService";


const Logs = () => {
    const limit = 10;
    const loc = useLocation()
    const [loadingPage, setLoadingPage] = useState(true);
    const [totalLogs, setTotalLogs] = useState(0);
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        const getLogCount = async () => {
            try {
                const response = await sqlService.getLogCount();
                const totalCount = response.data['count'];
                setTotalLogs(totalCount);
                setLoadingPage(false);
            }
            catch(e) {
                console.error(e);
            }
        }
        getLogCount()
    },[]);


    return (
        <PageTemplate currentPath={loc.pathname} navItems={navItems}>
            {
                loadingPage ? <PageLoading/> : <h1>{totalLogs}</h1>
            }
        </PageTemplate>
    );
}

export default Logs;