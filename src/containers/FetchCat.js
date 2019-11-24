import { connect } from "react-redux";
import Image from "../components/Image";

const mapStateToProps = state => {
  // console.log(state);
  return {
    imageCat: state.imageCat
  };
};
export default connect(mapStateToProps)(Image);
