module ApplicationHelper
  def javascript_tag(path, is_dev = false)
    if is_dev && Rails.env.development?
      [
        "<script type='text/javascript' src='http://127.0.0.1:3232/#{path}.js'></script>",
      ].join('').html_safe
    else
      javascript_include_tag path
    end
  end
end
