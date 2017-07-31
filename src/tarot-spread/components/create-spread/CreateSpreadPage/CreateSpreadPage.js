/* @flow */

import React from 'react';
import { ISpreadMetadata } from '../../../types/spread.interfaces';
import { routes } from '../../../../root/app.routes';
import { Link } from 'react-router-dom';
import { IPayloadAction } from '../../../../root/types/create-action.interface';

type PropTypes = {
  spreads: Array<ISpreadMetadata>,
  createSpread: (spread: ISpreadMetadata) => IPayloadAction
};

const CreateSpreadPage = ({ spreads, createSpread }: PropTypes) =>
  <article>
    <h2>Spreads</h2>
    {spreads.map((spread: ISpreadMetadata) =>
      <Link
        to={routes.spreadPage}
        onClick={() => createSpread(spread)}
        key={spread.type}
      >
        <div>
          New {spread.title} Spread
        </div>
      </Link>
    )}
  </article>;

export default CreateSpreadPage;
