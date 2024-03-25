import { BaranchesTable } from "@/components/admin/BaranchesTable/BaranchesTable";
import { PrismaBranches } from "@/helpers/prisma/prismaBranches";
import Link from "next/link";

async function Branches() {

    const prisma = new PrismaBranches()

    const listBranches = await prisma.getAllBranches("ru")


    return (
        <div className="overflow-x-auto mx-auto container" style={{ borderRadius: "10px" }}>

            <BaranchesTable listBranches={listBranches} />
        </div>
    );
}

export default Branches;