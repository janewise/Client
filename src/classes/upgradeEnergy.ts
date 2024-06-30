export default class UpgradeEnergy {
    private _currentCost: number;
    private _costMultiplier: number;
  
    private _level: number = 0;
  
    private _maxEnergyIncrement: number;
    private _energyRefillIncrement: number;
    private _startingCost: number;
    private _startingMaxEnergyIncrement: number;
    private _startingEnergyRefillIncrement: number;
  
    constructor(
      startingCost: number,
      costMultiplier: number,
      startingMaxEnergyIncrement: number,
      energyRefillIncrement: number
    ) {
      this._currentCost = startingCost;
      this._startingCost = startingCost; // Needed for loading game
      this._costMultiplier = costMultiplier;
      this._maxEnergyIncrement = startingMaxEnergyIncrement;
      this._startingMaxEnergyIncrement = startingMaxEnergyIncrement; // Needed for loading game
      this._energyRefillIncrement = energyRefillIncrement;
      this._startingEnergyRefillIncrement = energyRefillIncrement; // Needed for loading game
    }
  
    public upgrade(currentBalance: number): boolean {
      if (this._currentCost > currentBalance) {
        return false;
      }
  
      this._level += 1;
      this._currentCost = Math.ceil(this._currentCost * this._costMultiplier);
      return true;
    }
  
    public loadUpgrade(level: number) {
      this._level = level;
      this._currentCost = this._startingCost;
      for (let index = 0; index < level; index++) {
        this._currentCost = Math.ceil(this._currentCost * this._costMultiplier);
      }
      this._maxEnergyIncrement = this._startingMaxEnergyIncrement * level;
      this._energyRefillIncrement = this._startingEnergyRefillIncrement * level;
    }
  
    // Returns upgrade cost
    public get currentCost(): number {
      return this._currentCost;
    }
  
    // Returns at what level is the upgrade at
    public get level(): number {
      return this._level;
    }
  
    // Returns the max energy increment
    public get maxEnergyIncrement(): number {
      return this._maxEnergyIncrement;
    }
  
    // Returns the energy refill increment
    public get energyRefillIncrement(): number {
      return this._energyRefillIncrement;
    }
  }
  