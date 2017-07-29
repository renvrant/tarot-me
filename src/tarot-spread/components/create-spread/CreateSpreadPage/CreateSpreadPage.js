/* @flow */

import React from 'react';
import { ISpreadMetadata } from '../../../types/spread.interfaces';
import { routes } from '../../../../root/app.routes';
import { Link } from 'react-router-dom';

const CreateSpreadPage = ({
  spreads,
  createSpread
}: {
  spreads: Array<ISpreadMetadata>,
  createSpread: (spread: ISpreadMetadata) => any
}) =>
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
