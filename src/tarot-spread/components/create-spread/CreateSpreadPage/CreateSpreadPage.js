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
  <article className="flex flex-column">
    <h2 className="f1 ttu ma5">Draw Your Cards</h2>
    <section className="bg-black flex flex-row pa4 justify-center">
      {spreads.map((spread: ISpreadMetadata) =>
        <Link
          className="link white db"
          to={routes.spreadPage}
          onClick={() => createSpread(spread)}
          key={spread.type}
        >
          <div className="pa2 ma4 grow">
            <p className="tr f5 i mv2">
              {spread.totalCards} card spread
            </p>
            <h3 className="mv0 pt3 f3 b--white bt bw2 lh-title">
              {spread.title}
            </h3>
            <p className="f4">
              {spread.description}
            </p>
          </div>
        </Link>
      )}
    </section>
  </article>;

export default CreateSpreadPage;
