import PropTypes from "prop-types";
import React from "react";
import {showError} from "../toast";
import axios from "axios";

class Fetcher extends React.Component {

    static defaultProps = {showToast:true}

    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = {
            data: undefined,
            isLoading: false,
            loaded: false,
            error: undefined,
        }
        this.source = axios.CancelToken.source();
    }

    load() {
        this._isMounted = true;
        this.setState({isLoading: true});

        axios.get(this.props.url, {
                params: this.props.params,
                cancelToken: this.source.token})
            .then(result => this.setState({
                data: result.data,
                isLoading: false,
                loaded: true
            }))
            .catch(error => {
                this._isMounted && this.setState({
                    error,
                    isLoading: false
                });
                this.props.showToast && error.message && showError(error.message);
                this.props.onError && this.props.onError(error);
            });
    }

    componentWillUnmount() {
        this.source.cancel();
        this._isMounted = false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps) {
            this.load()
        }

    }
    componentDidMount() {
        this.load();
    }

    render() {
        return this.props.render(this.state);
    }
}

export default Fetcher;

Fetcher.propTypes = {
    url: PropTypes.string,
    render: PropTypes.func,
    showToast: PropTypes.bool,
    onError: PropTypes.func,
};