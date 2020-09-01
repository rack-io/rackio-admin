# rackio_admin/views.py

import os
import mimetypes

from rackio import status_code

from .tools import uri_to_path, get_static_path, get_content_type, get_package_directory


class AdminStaticResource:

    def on_get(self, req, resp, filename):

        uri = req.relative_uri
        uri = uri.replace("/admin", "")
        
        path_stack = uri_to_path(uri)
        path = get_static_path(path_stack, filename)

        resp.status = status_code.HTTP_200
        resp.content_type = get_content_type(filename)

        try:
            with open(path, 'rb') as f:
                resp.body = f.read()
        except:
            with open(path, 'r', encoding='utf8', errors='ignore') as f:
                resp.body = f.read()


class AdminViewResouce:

    def on_get(self, request, response):
        """

        :param request:
        :param response:
        :return:
        """
        response.status = status_code.HTTP_200
        response.content_type = 'text/html'

        directory = get_package_directory()

        path = os.path.join(directory, "templates")
        path = os.path.join(path, "index.html")

        with open(path, 'r') as f:
            response.body = f.read()
