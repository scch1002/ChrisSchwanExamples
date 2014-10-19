using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularMetaApp.EntityModel
{
    public class ChrisSchwanExamplesAuth : IdentityDbContext<IdentityUser>
    {
        public ChrisSchwanExamplesAuth()
            : base("ChrisSchwanExamplesAuth")
        {}
    }
}