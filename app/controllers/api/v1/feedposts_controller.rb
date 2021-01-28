module Api
  module V1
    class FeedpostsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        feedposts = Feedpost.all

        render json: FeedpostSerializer.new(feedposts).serializable_hash.to_json
      end

      def show
        feedpost = Feedpost.find_by(recipient_id: params[:recipient_id])

        render json: FeedpostSerializer.new(feedpost).serializable_hash.to_json
      end

      def create
        feedpost = Feedpost.new(feedpost_params)

        if feedpost.save
          render json: FeedpostSerializer.new(feedpost).serializable_hash.to_json
        else
          render json: { error: feedpost.errors.messages }, status: 422
        end
      end

      def update
        feedpost = Feedpost.find_by(recipient_id: params[:recipient_id])

        if feedpost.update(feedpost_params)
          render json: FeedpostSerializer.new(feedpost, options).serializable_hash.to_json
        else
          render json: { error: feedpost.errors.messages }, status: 422
        end
      end

      def destroy
        feedpost = Feedpost.find_by(recipient_id: params[:recipient_id])

        if feedpost.destroy
          head :no_content
        else
          render json: { error: feedpost.errors.messages }, status: 422
        end
      end
      
      private

      def feedpost_params
        params.require(:feedpost).permit(:user_id, :message, :recipient_id, :points, :gif_url)
      end

      def options
        @options ||= { include: %i[users] }
      end
    end
  end
end
