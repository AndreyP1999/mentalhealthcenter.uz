
import { Header } from "@/components/admin/Header/page";
import { ListTemplate } from "@/components/admin/listTemplate/page";
import { getBlock } from '@/UI_Template/blocks/index';

function ConstructorPage() {
return (<>
        <Header>
            <ListTemplate />
        </Header>
    </>);
}

export default ConstructorPage;