
export default function SubsectionHeading(props){
    return(
        <h3 className={props.className} style={{
            fontSize:"25px",
            fontWeight:"400",
            textTransform:"capitalize",
            textAlign:`${props.textAlign}`,
            paddingTop:`${props.pt}`,
            paddingBottom:`${props.pb}`,
            marginTop:`${props.mt}`,
            marginBottom:`${props.mb}`,
        }}
            onclick={props.onclick}
        >
            {props.children}
        </h3>
    )
}