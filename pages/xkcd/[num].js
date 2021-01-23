export default function xkcdDetails(props){
    return(
        <>
        <h3>{props.xkcd.safe_title}</h3>
      <img src={props.xkcd.img}/>

        </>

    )
}

export async function getServerSideProps(context){
    const num = context.query.num;
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    const jsonData  = await response.json();
    return {props: {xkcd: jsonData}}
}