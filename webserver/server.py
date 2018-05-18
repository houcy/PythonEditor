# -*- coding: utf-8 -*-
"""Launch the Python Editor Web Server and handle all requests.

Licensed under the Apache License, Version 2.0 (the "License"):
    http://www.apache.org/licenses/LICENSE-2.0
"""
from __future__ import unicode_literals, absolute_import, print_function
import os
import sys
# local-packages imports
from bottle import request, response
from bottle import static_file, run, default_app, redirect, abort

#
# Configure server
#
app = application = default_app()
document_root = ''


def launch_server(ip='localhost', port=8000, document_root_=''):
    """Launch the Waitress server and Bottle framework with given settings.

    :param ip: IP address to serve. Default to localhost, set to '0.0.0.0' to
            be able to access the server from your local network.
    :param port: Port to serve, default 8000.
    :param document_root_: Path to be the server document root, defualt cwd.
    :return: This function DOES NOT return.
    """
    global document_root
    print('Setting HTTP Server Document Root to:\n\t%s' % document_root_)
    document_root = document_root_
    print('Launch Server:')
    sys.stdout.flush()
    run(app, server='waitress', host=ip, port=port, debug=True)


@app.hook('before_request')
def strip_path():
    """Bottle hook to strip trailing forward slashes from requests."""
    request.environ['PATH_INFO'] = request.environ['PATH_INFO'].rstrip('/')


def set_header_no_cache():
    """Set the HTTP response to no cache the data.

    Implementation depends on Python version.
    """
    if sys.version_info[0] < 3:
        response.headers[
            'Cache-Control'.encode('ascii', 'ignore')] = 'no-cache'
    else:
        response.headers['Cache-Control'] = 'no-cache' 

#
# Serving static files.
#
@app.route('/')
def index_redirect():
    """Redirect the server entry point to the Ardublockly front end."""
    redirect('/editor.html')

@app.route('/help')
def help_redirect():
    """Redirect the server entry point to the Ardublockly front end."""
    redirect('/help.html')   

@app.route('/<file_path:path>')
def static_blockly(file_path):
    """Serve the 'blockly' folder static files.

    :param file_path: File path inside the 'blockly' folder.
    :return: Full HTTPResponse for the static file.
    """
    return static_file(file_path, root=os.path.join(document_root, ''))
