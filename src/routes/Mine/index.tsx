import React, { PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
interface Params {}
type Props = PropsWithChildren<RouteComponentProps<Params>>;
const Mine = (props: Props) => {
    return <div>Mine</div>;
};
export default connect()(Mine);
