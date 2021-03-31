class HoursController < ApplicationController
  before_action :set_hour, only: [:show, :update, :destroy]

  # GET /hours
  def index
    @hours = Hour.all

    render json: @hours
  end

  # GET /hours/1
  def show
    render json: @hour
  end

  # POST /hours
  def create
    @hour = Hour.new(hour_params)

    if @hour.save
      render json: @hour, status: :created, location: @hour
    else
      render json: @hour.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hours/1
  def update
    if @hour.update(hour_params)
      render json: @hour
    else
      render json: @hour.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hours/1
  def destroy
    @hour.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hour
      @hour = Hour.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def hour_params
      params.require(:hour).permit(:date, :hours, :project_id)
    end
end
