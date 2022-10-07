import { ReactElement } from "react"
import { Typography } from "@mui/material"

import { NextPageWithLayout } from "@/pages/_app"
import Layout from "@/react/components/Layout"

const IndexPage: NextPageWithLayout = () => {
    return (
        <div>
            <Typography variant="h1">INDEX</Typography>
        </div>
    )
}
IndexPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default IndexPage
