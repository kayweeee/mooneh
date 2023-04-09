class AccountsController < ApplicationController
    
    skip_before_action :verify_authenticity_token

  def index
    @accounts = Account.all
    render json: @accounts, status: :ok
  end

  # GET /accounts/{accountname}
  def show
      account = Account.find_by_userName(params[:id])
      render json: account, status: :ok
  end

  def create
      @account = Account.new(account_params)
      profilePic = params[:profilePic]
      if @account.save
          if profilePic
              @account.profilePic.attach profilePic if profilePic
              @account.profilePic_url = url_for(@account.profilePic)
            #   @account.profilePic_url = @account.profilePic.service_url
              @account.save
          end
          render json: { account: @account }, status: :created
          # accountMailer.with(account: @account).welcome_email.deliver_later
          # accountMailer.registration_confirmation(@account).deliver_later
          # render json: { account: @account, message: "Please activate your account by following the instructions in the account confirmation email you received to proceed"}, status: :created
      else
          render json: { errors: @account.errors.full_messages },
                status: :unprocessable_entity
      end
  end

  # def confirm_email
  #     account = account.find_by_confirm_token(params[:id])
  #     if account
  #         if account.email_confirmed == false
  #             account.email_activate
  #             render json: { success: "Welcome to Monstyr X AI! Your email has been confirmed.
  #             Please sign in to continue." }
  #         else
  #             render json: { message: "Email has already been activated." }
  #         end
  #     else
  #       render json: { error: "Sorry. account does not exist" }
  #     end
  # end

  def update
      if @account.update({:account_type => params[:account_type]})
          render json: @account
      else
          render json: { error: "Update failed."}
      end
  end

  # DELETE /accounts/{accountname}
  def destroy
    @account = Account.find_by_userName(params[:id])
    @temp_account = @account
    @account.destroy
    render json: @temp_account
  end

  def delall
    Account.delete_all
  end

  private
      def account_params
          params.permit(:userName, :expenses, :profilePic, :moonDust, :moonVillage,
          :totalSpent, :monthlySpent, :moonVillageSize, :password_digest,
          :confirm_token, :email, :name, :profilePic_url)
      end

      def set_account
          @account = account.find(params[:id])
      end

end
