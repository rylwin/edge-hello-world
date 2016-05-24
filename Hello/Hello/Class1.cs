using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hello
{
    public class Hello
    {
        public async Task<object> SayHello(object _)
        {
            Console.WriteLine("Hello!");
            return await Task.FromResult<object>(null);
        }
    }
}
