import { usePagination } from "../../../hooks/usePagination";
import MyButton from "../button/MyButton";
import PropTypes from 'prop-types';
import classes from "./MyPagination.module.css";

function MyPagination({ totalPages, page, changePage }) {
    let pagesArray = usePagination(totalPages);

    const childClass = classes.page;
    const childClassCurrent = [childClass, classes.page__current].join(" ");

    return (
        <div className={classes.pages__wrapper}>
            {pagesArray.map((number) =>
                <MyButton
                    key={number}
                    className={number === page ? childClassCurrent : childClass}
                    onClick={() => changePage(number)}
                >
                    {number.toString()}
                </MyButton>
            )}
        </div>
    )
}

MyPagination.propTypes = {
    totalPages: PropTypes.array,
    page: PropTypes.number,
    changePage: PropTypes.func,
};

export default MyPagination