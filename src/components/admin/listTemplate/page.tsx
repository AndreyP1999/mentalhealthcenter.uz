import { getIcons } from '@/UI_Template/icons/index';

function WirteIcons() {

    const listIconst = []
    const icons = getIcons()
    let i = 0;
    for (const key in icons) {
        listIconst.push(<button className='mb-5' id={key}>{icons[key]}</button>)
        i++;
    }
    return <>{...listIconst}</>
}

export function ListTemplate() {

    return (
        <>

                {WirteIcons()}

 

           
        </>
    );
}

