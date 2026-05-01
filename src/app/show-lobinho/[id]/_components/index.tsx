'use client'

import { axiosAdapter } from "@/lib/axios"
import LoboService from "@/services/loboService"
import { useRouter } from "next/navigation"

interface props{
    id: string
}
export default function ExcludeButton({ id }: props){
    const loboService = new LoboService(axiosAdapter)
    const router = useRouter();

    async function handleDelete() {
        await loboService.deleteLobo(id);
        router.back();
    }

    return(
        <button className="text-white bg-[#DE5959] font-bold text-[22px] px-[50px] py-[15px]" onClick={handleDelete}>
            Excluir
        </button>
    )
}