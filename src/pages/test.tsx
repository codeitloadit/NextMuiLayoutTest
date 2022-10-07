import { ReactElement } from "react"
import { Typography } from "@mui/material"

import { NextPageWithLayout } from "../pages/_app"
import Layout from "../react/components/Layout"

const TestPage: NextPageWithLayout = () => {
    return (
        <div>
            <Typography variant="h1">TEST</Typography>
        </div>
    )
}
TestPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default TestPage
