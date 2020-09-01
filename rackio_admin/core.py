# -*- coding: utf-8 -*-
"""rackio_admin/core.py

This module implements the core app class and methods for Rackio Admin UI.
"""

from ._singleton import Singleton
from .resources import AdminStaticResource
from .tools import resource_paths



class AdminCore(Singleton):

    def __init__(self):

        super(AdminCore, self).__init__()
        
        self.app = None

    def register_admin(self):

        paths = resource_paths()

        _static = AdminStaticResource()

        for path in paths:

            route = "/admin" + path + "/{filename}"

            self.app.add_route(route, _static)

    def __call__(self, app):

        self.app = app

        self.register_admin()