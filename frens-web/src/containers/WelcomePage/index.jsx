// Main Entry point for the website

import { PageContainer } from "../../components/PageContainer";
import TextContent from "./TextContent";

import Nav from "../../components/Nav";

import '../../App.css';

export function WelcomePage(props) {
    return <PageContainer>
        <TextContent />
    </PageContainer>;
}

export default WelcomePage;