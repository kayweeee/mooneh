# require "active_support/core_ext/integer/time"

# Rails.application.configure do
#   # Settings specified here will take precedence over those in config/application.rb.

#   # Code is not reloaded between requests.
#   config.cache_classes = true

#   # Eager load code on boot. This eager loads most of Rails and
#   # your application in memory, allowing both threaded web servers
#   # and those relying on copy on write to perform better.
#   # Rake tasks automatically ignore this option for performance.
#   config.eager_load = true

#   # Full error reports are disabled and caching is turned on.
#   config.consider_all_requests_local       = false
#   config.action_controller.perform_caching = true

#   # Ensures that a master key has been made available in either ENV["RAILS_MASTER_KEY"]
#   # or in config/master.key. This key is used to decrypt credentials (and other encrypted files).
#   # config.require_master_key = true

#   # Disable serving static files from the `/public` folder by default since
#   # Apache or NGINX already handles this.
#   config.public_file_server.enabled = ENV["RAILS_SERVE_STATIC_FILES"].present?

#   # Compress CSS using a preprocessor.
#   # config.assets.css_compressor = :sass

#   # Do not fallback to assets pipeline if a precompiled asset is missed.
#   config.assets.compile = false

#   # Enable serving of images, stylesheets, and JavaScripts from an asset server.
#   # config.asset_host = "http://assets.example.com"

#   # Specifies the header that your server uses for sending files.
#   # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for Apache
#   # config.action_dispatch.x_sendfile_header = "X-Accel-Redirect" # for NGINX

#   # Store uploaded files on the local file system (see config/storage.yml for options).
#   # config.active_storage.service = :local

#   # Mount Action Cable outside main process or domain.
#   # config.action_cable.mount_path = nil
#   # config.action_cable.url = "wss://example.com/cable"
#   # config.action_cable.allowed_request_origins = [ "http://example.com", /http:\/\/example.*/ ]

#   # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
#   # config.force_ssl = true

#   # Include generic and useful information about system operation, but avoid logging too much
#   # information to avoid inadvertent exposure of personally identifiable information (PII).
#   config.log_level = :info

#   # Prepend all log lines with the following tags.
#   config.log_tags = [ :request_id ]

#   # Use a different cache store in production.
#   # config.cache_store = :mem_cache_store

#   # Use a real queuing backend for Active Job (and separate queues per environment).
#   # config.active_job.queue_adapter     = :resque
#   # config.active_job.queue_name_prefix = "hanabiner_rails_production"

#   config.action_mailer.perform_caching = false

#   # Ignore bad email addresses and do not raise email delivery errors.
#   # Set this to true and configure the email server for immediate delivery to raise delivery errors.
#   # config.action_mailer.raise_delivery_errors = false

#   # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
#   # the I18n.default_locale when a translation cannot be found).
#   config.i18n.fallbacks = true

#   # Don't log any deprecations.
#   config.active_support.report_deprecations = false

#   config.active_storage.service = :google

#   # Use default logging formatter so that PID and timestamp are not suppressed.
#   config.log_formatter = ::Logger::Formatter.new

#   # Use a different logger for distributed setups.
#   # require "syslog/logger"
#   # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new "app-name")

#   if ENV["RAILS_LOG_TO_STDOUT"].present?
#     logger           = ActiveSupport::Logger.new(STDOUT)
#     logger.formatter = config.log_formatter
#     config.logger    = ActiveSupport::TaggedLogging.new(logger)
#   end

#   # Do not dump schema after migrations.
#   config.active_record.dump_schema_after_migration = false
# end
require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded any time
  # it changes. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  config.active_storage.service = :local

  # Enable server timing
  config.server_timing = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join("tmp/caching-dev.txt").exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true

    config.cache_store = :memory_store
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  # config.active_storage.service = :local

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = false

  config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise

  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  config.web_console.development_only = false

  # Raises error for missing translations.
  # config.i18n.raise_on_missing_translations = true

  # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true

  # Uncomment if you wish to allow Action Cable access from any origin.
  # config.action_cable.disable_request_forgery_protection = true
end