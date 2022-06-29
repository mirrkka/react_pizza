import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={250}
    height={500}
    viewBox="0 0 250 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="37" y="153" rx="0" ry="0" width="0" height="2" /> 
    <circle cx="127" cy="124" r="104" /> 
    <rect x="8" y="290" rx="0" ry="0" width="352" height="115" /> 
    <rect x="6" y="422" rx="0" ry="0" width="293" height="99" /> 
    <rect x="244" y="460" rx="0" ry="0" width="2" height="10" /> 
    <rect x="7" y="238" rx="0" ry="0" width="250" height="41" />
  </ContentLoader>

)

export default Skeleton