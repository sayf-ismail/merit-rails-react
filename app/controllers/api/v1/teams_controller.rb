module Api
  module V1
    class TeamsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        teams = Team.all

        render json: TeamSerializer.new(teams, options).serializable_hash.to_json
      end

      def show
        team = Team.find_by(name: params[:name])

        render json: TeamSerializer.new(team, options).serializable_hash.to_json

      end

      def create
        team = Team.new(team_params)

        if team.save
          render json: TeamSerializer.new(team).serializable_hash.to_json
        else
          render json: { error: team.errors.messages }, status: 422
        end
      end

      def update
        team = Team.find_by(name: params[:name])

        if team.update(team_params)
          render json: TeamSerializer.new(team, options).serializable_hash.to_json
        else
          render json: { error: team.errors.messages }, status: 422
        end
      end

      def destroy
        team = Team.find_by(name: params[:name])

        if team.destroy
          head :no_content
        else
          render json: { error: team.errors.messages }, status: 422
        end
      end

      private

      def team_params
        params.require(:team).permit(:name)
      end

      def options
        @options ||= { include: %i[users] }
      end
    end
  end
end
