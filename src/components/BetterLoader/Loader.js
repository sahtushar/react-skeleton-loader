import ContentLoader from "./ContentLoader.js";

const Loader = ({loaded, children, customstyle, position})=>{
    return <div style={{position:"relative", height:"100%", width:"100%"}}>
    {!loaded ? (
        <ContentLoader
          extraStyles={customstyle || {}}
          position={position}
        />
      ) : children}
      </div>
}
export default Loader;