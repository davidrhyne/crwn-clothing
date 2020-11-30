import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => {
    
    // with Route, these are available
    // console.log("match = ", match, "location = ", location, "history = ", history);
    // console.log("location = ", location);
    // console.log("history = ", history);

    return (

    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview}  />    
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)};

export default ShopPage;