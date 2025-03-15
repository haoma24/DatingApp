using System;
using API.Entities;

namespace API.Interfaces;

public interface ITokeService
{
    string CreateToke(AppUser user);
}
