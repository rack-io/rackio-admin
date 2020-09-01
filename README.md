# rackio-admin
A Rackio extension to add a Web Admin Interface 

## Installation

```
pip install RackioAdmin
```

## Usage

```python
from rackio import Rackio
from rackio_admin import RackioAdmin

app = Rackio()

RackioAdmin(app)

app.run(8028)
```

## Admin UI

After running your application you will find the Admin UI in the following address.

```
http://localhost:8028/admin
```
