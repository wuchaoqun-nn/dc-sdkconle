/*
 * @Author: Caven
 * @Date: 2020-01-31 20:52:01
 * @Last Modified by: Caven
 * @Last Modified time: 2020-04-03 13:44:09
 */
import Cesium from '@/namespace'
import Draw from './Draw'

const DEF_STYLE = {
  material: Cesium.Color.BLUE.withAlpha(0.6)
}

class DrawRect extends Draw {
  constructor(plotInfo, style) {
    super(plotInfo)
    this._coordinates = new Cesium.Rectangle()
    this._positions = []
    this._style = {
      ...DEF_STYLE,
      ...style
    }
  }

  _mouseClickHandler(e) {
    let position = e.surfacePosition
    if (position) {
      this._positions.push(position)
      if (this._positions.length === 2) {
        this._coordinates = Cesium.Rectangle.fromCartesianArray(
          this._positions,
          Cesium.Ellipsoid.WGS84
        )
        this._unbindEnvet()
        this._plotEvent.raiseEvent({
          type: DC.OverlayType.RECT,
          points: DC.T.transformCartesianArrayToWSG84Array(this._positions)
        })
      }
    }
  }

  _mouseMoveHandler(e) {
    this._viewer.tooltip.setContent('左击选择点位')
    let position = e.target ? e.position : e.surfacePosition
    if (position) {
      this._viewer.tooltip.setPosition(position)
      this._coordinates = Cesium.Rectangle.fromCartesianArray(
        [...this._positions, position],
        Cesium.Ellipsoid.WGS84
      )
    }
  }

  _prepareDelegate() {
    this._delegate.rectangle = {
      coordinates: new Cesium.CallbackProperty(time => {
        return this._coordinates
      }),
      ...this._style
    }
    this._layer.entities.add(this._delegate)
  }
}

export default DrawRect
