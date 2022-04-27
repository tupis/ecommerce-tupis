const BigImage = ({ image, scale }) => {
    return (
        <>
            <img src={image} alt="produto normal" id="bigImage" onClick={scale}/>
        </>
    );
}
 
export default BigImage;