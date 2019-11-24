import { connect } from "react-redux";
import Images from "../components/Images";
import { fetchCats } from "../actions";
const mapStateToProps = state => {
  return {
    imageCats: state.imageCats,
    fetchCats
  };
};
export default connect(mapStateToProps, { fetchCats })(Images);
