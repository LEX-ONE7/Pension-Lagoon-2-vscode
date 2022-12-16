import * as React from 'react';
import SliderAuto from '../SliderAuto';
const BoxActivities = () => (
  <div className="row">
    <div className="container-fluid text-light text-center">
          {/* Activités */}

          {/* Nautiques */}

            <div
              className="overflow-auto"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,108,215,1) 0%, rgba(7,155,215,1) 36%, rgba(7,162,215,1) 65%, rgba(7,64,215,1) 100%),rgb(7,108,215)',
              }}
            >
                <h2 className="display-5">Nautiques</h2>
                <p className="lead">
                  Entouré par les eaux cristallines de l'océan Pacifique Sud,
                  l'InterContinental Tahiti Resort & Spa propose une mutitude de
                  sports nautiques. Offrez-vous une excursion guidée de plongée
                  en apnée ou une sortie en voilier, partez à l'aventure pour
                  surfer les vagues de Tahiti ou faites le plein de sensations
                  aquatiques en paddle, kayak ou en jet ski.{' '}
                </p>
              <div
                style={{
                  width: '100%',
                  maxHeight: '100%',
                  borderRadius: '21px 21px 0 0 ',
                }}
              >
                <SliderAuto collection="LocationMarine" />
              </div>
            </div>

          {/* Terrestres */}

            <div
              className=""
              style={{
                background:
                  'linear-gradient(90deg, rgba(17,86,4,1) 0%, rgba(77,209,48,1) 41%, rgba(68,188,38,1) 67%, rgba(21,68,8,1) 100%),rgb(17,86,4)',
              }}
            >
              <div className="  px-3 ">
                <h2 className="display-5 ">Terrestres</h2>
                <p className="lead">
                  {' '}
                  Tahiti est une île regorgeant de trésors cachés, de ses
                  vallées verdoyantes à ses lagons scintillants. Pour découvrir
                  l'île sous tous ses aspects, nous proposons des excursions
                  tous terrains, pour tous les niveaux de forme physique. Faites
                  le tour de l'île accompagné d'un guide, explorez Tahiti en
                  4x4, partez à l'aventure hors des sentiers battus ou en
                  promenade sur les chemins balisés à travers la jungle.
                </p>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '400px',
                }}
              >
                <SliderAuto collection="Location" />
              </div>
            </div>
          </div>
        </div>
);
export default BoxActivities;
